import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsArticleComponent } from './news-article/news-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: NewsArticleComponent },
  { path: '**', redirectTo: 'articles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
