import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { environment } from '../enviroment/enviroment';

import { AuthModule } from './auth/auth.module';
import { CatalogueModule } from './catalogue/catalogue.module'; 
import { ComponentsModule } from './components/components.module';
import { ProductManagementsModule } from './product-managements/product-managements.module';
import { ShoppingCarModule } from './shopping-car/shopping-car.module';
import { LocalStorageService } from './services/local-storage.service';
import { ImageUploaderDirective } from './directives/image-uploader.directive';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthService } from './services/auth.service';


// Redux

import { NgxsModule } from '@ngxs/store';

import { CatalogeState } from './redux/catalogue/catalogue.redux';

@NgModule({
  imports: [
    // Compoents
    BrowserModule,
    FormsModule,
    AuthModule,
    CatalogueModule,
    ComponentsModule,
    ProductManagementsModule,
    ShoppingCarModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireModule,

    // Redux
    NgxsModule.forRoot([
      CatalogeState
    ])
  ],
  declarations: [ AppComponent, HelloComponent, ImageUploaderDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ LocalStorageService, AuthService ]
})
export class AppModule { }
