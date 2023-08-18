import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';

import { SvgComponentsModule } from './modules/svg-components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarrouselItemsComponent } from './components/carrousel-items/carrousel-items.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { environment } from './environments/enviroments';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AmountBoxComponent,
		CardBoxComponent,
		CarrouselItemsComponent,
		HomeComponent,
		NewsComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		SvgComponentsModule,
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
