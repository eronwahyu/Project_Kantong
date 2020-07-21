import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cekkantong',
    loadChildren: () => import('./cekkantong/cekkantong.module').then( m => m.CekkantongPageModule)
  },
  {
    path: 'pembesar',
    loadChildren: () => import('./pembesar/pembesar.module').then( m => m.PembesarPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'setelan',
    loadChildren: () => import('./setelan/setelan.module').then( m => m.SetelanPageModule)
  },
  {
    path: 'pilihpos',
    loadChildren: () => import('./pilihpos/pilihpos.module').then( m => m.PilihposPageModule)
  },
  {
    path: 'pilih-bc1.1',
    loadChildren: () => import('./pilih-bc1.1/pilih-bc1.1.module').then( m => m.PilihBC1.1PageModule)
  },
  {
    path: 'gudang',
    loadChildren: () => import('./gudang/gudang.module').then( m => m.GudangPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
