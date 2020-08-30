import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';

import { LoginService } from '../../services/login.service';
import { CryptoService } from '../../services/crypto.service';


@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  viewProviders: [ LoginService, CryptoService ],
})
export class LoginComponent {

  username: string;
  menustring: string;
  menus2: any;
  jmenu:any;

  constructor(
    private _router: Router,
    private _loadingService: TdLoadingService, 
    private _loginService: LoginService,
    private _cryptoService: CryptoService,
    private _dialogService: TdDialogService,
  ) { }

  login(): void {
    this._loadingService.register();
    this.jmenu = {"usr":this.username};
    this._loginService.getMenu().subscribe((menus: any) => {
      
      this.menus2 = menus.menu.Childs;
      
      let menuCipher = this._cryptoService.encryptText(JSON.stringify(this.menus2));
      let usrCipher = this._cryptoService.encryptText(JSON.stringify(this.username));
      let areaCipher = this._cryptoService.encryptText(JSON.stringify(menus.area));
      let perfillCipher = this._cryptoService.encryptText(JSON.stringify(menus.perfil));

      sessionStorage.setItem("Menus", menuCipher.toString());
      sessionStorage.setItem("User", usrCipher.toString());
      sessionStorage.setItem("Areas", areaCipher.toString());
      sessionStorage.setItem("perfil", perfillCipher.toString());

      this._router.navigate(['']);
      this._loadingService.resolve();
      setTimeout(() => {
        this._loadingService.resolve('menus.load');
      }, 750);
    }, (error: Error) => {
      console.log(error);
      this._loadingService.register();
        this._dialogService.openAlert({message: 'Usuario sin acceso', closeButton :'Aceptar'});
        this._router.navigate(['login']);
        this._loadingService.resolve();
        setTimeout(() => {
          this._loadingService.resolve();
        }, 500);
      },
    );
  }

}
