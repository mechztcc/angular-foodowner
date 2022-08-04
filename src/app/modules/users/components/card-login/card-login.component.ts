import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../shared/services/users.service';
import { Auth } from '../../shared/types/auth.interface';
import { Login } from '../../shared/types/login.interface';
import { User } from '../../shared/types/user.interface';

@Component({
  selector: 'card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css'],
})
export class CardLoginComponent implements OnInit {
  isLoading: boolean = false;
  form: FormGroup;
  login: Login;

  submited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  validateForm() {
    if (!this.form.invalid) {
      this.submited = false;
      this.login = {
        email: this.form.controls['email'].value,
        password: this.form.controls['password'].value,
      };
      console.log(this.login);
      this.createSession();
    }
    if (this.form.invalid) {
      this.submited = true;
      this.toastrService.error('Formulário incorreto', 'Error');
    }
  }

  createSession() {
    this.isLoading = true;
    this.usersService
      .login(this.login)
      .subscribe((data: Auth) => {
        this.toastrService.success('Logado com sucesso!', 'Sucesso');
        this.saveOnLocalStorage(data);
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  saveOnLocalStorage(data: Auth) {
    localStorage.setItem('token', `${data.type} ${data.token}`);
    localStorage.setItem('token_expires', `${data.expires_at}`);
  }
}
