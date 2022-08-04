import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/types/user.interface';

@Component({
  selector: 'card-create-account',
  templateUrl: './card-create-account.component.html',
  styleUrls: ['./card-create-account.component.css'],
})
export class CardCreateAccountComponent implements OnInit {
  isLoading: boolean = false;
  form: FormGroup;
  user: User;

  submited: boolean = false;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      confirmPass: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  validateForm() {
    if (!this.form.invalid) {
      this.submited = false;
      this.user = {
        name: this.form.controls['name'].value,
        email: this.form.controls['email'].value,
        password: this.form.controls['password'].value,
      };
      this.createAccount();
    }

    if(this.form.invalid) {
      this.toastrService.error('Formulário possui erros', 'Error');
      this.submited = true;
    }
  }

  createAccount() {
    this.isLoading = true;
    this.usersService
      .createAccount(this.user)
      .subscribe((data: any) => {})
      .add(() => {
        this.isLoading = false;
        this.toastrService.success('Conta criada com sucesso!', 'Sucesso')
        this.router.navigate(['/login'])
      });
  }
}
