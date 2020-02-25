import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'home',
				children: [
					{
						path: '',
						loadChildren: () => import('./home/home.module').then(tab => tab.HomeModule)
					}		
				]
			},
			{
				path: 'products',
				children: [
				{
					path: '',
					loadChildren: () => import('./products/products.module').then(tab => tab.ProductsModule)
				}
				]
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/products',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
