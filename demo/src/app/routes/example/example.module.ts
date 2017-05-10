import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { PageComponent } from './component/page.component';
import { AccordionComponent } from "./component/accordion.component";
import { MenuService } from "./pages/home/menu.service";

import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './pages/button/button.component';
import { ListComponent } from './pages/list/list.component';
import { InputComponent } from './pages/input/input.component';
import { SliderComponent } from './pages/slider/slider.component';
import { DemoUploaderComponent } from './pages/uploader/uploader.component';
import { DemoActionSheetComponent } from './pages/actionsheet/actionsheet.component';
import { DemoDialogComponent } from './pages/dialog/dialog.component';
import { ArticleComponent } from './pages/article/article.component';
import { FlexComponent } from './pages/flex/flex.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { FooterComponent } from './pages/footer/footer.component';
import { GridComponent } from './pages/grid/grid.component';
import { IconsComponent } from './pages/icons/icons.component';
import { PanelComponent } from './pages/panel/panel.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { DemoLoadmoreComponent } from './pages/loadmore/loadmore.component';
import { DemoProgressComponent } from './pages/progress/progress.component';
import { DemoGalleryComponent } from './pages/gallery/gallery.component';
import { DemoPickerComponent } from './pages/picker/picker.component';
import { DemoSearchBarComponent } from './pages/searchbar/searchbar.component';
import { DemoNavbarComponent } from './pages/navbar/navbar.component';
import { DemoTabbarComponent } from './pages/tabbar/tabbar.component';
import { DemoToastComponent } from './pages/toast/toast.component';
import { DemoToptipsComponent } from './pages/toptips/toptips.component';
import { DemoMsgComponent } from './pages/msg/msg.component';
import { DemoMsgFailComponent } from './pages/msg/fail.component';
import { DemoMsgSuccessComponent } from './pages/msg/success.component';
import { DemoPopupComponent } from './pages/popup/popup.component';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'button', component: ButtonComponent },
            { path: 'input', component: InputComponent },
            { path: 'list', component: ListComponent},
            { path: 'slider', component: SliderComponent },
            { path: 'uploader', component: DemoUploaderComponent },
            { path: 'actionsheet', component: DemoActionSheetComponent },
            { path: 'dialog', component: DemoDialogComponent },
            { path: 'article', component: ArticleComponent },
            { path: 'flex', component: FlexComponent },
            { path: 'badge', component: BadgeComponent },
            { path: 'footer', component: FooterComponent },
            { path: 'grid', component: GridComponent },
            { path: 'icons', component: IconsComponent },
            { path: 'panel', component: PanelComponent },
            { path: 'preview', component: PreviewComponent },
            { path: 'loadmore', component: DemoLoadmoreComponent },
            { path: 'progress', component: DemoProgressComponent },
            { path: 'gallery', component: DemoGalleryComponent },
            { path: 'picker', component: DemoPickerComponent },
            { path: 'searchbar', component: DemoSearchBarComponent },
            { path: 'navbar', component: DemoNavbarComponent },
            { path: 'tabbar', component: DemoTabbarComponent },
            { path: 'toast', component: DemoToastComponent },
            { path: 'toptips', component: DemoToptipsComponent },
            { path: 'msg', component: DemoMsgComponent },
            { path: 'msg/fail', component: DemoMsgFailComponent },
            { path: 'msg/success', component: DemoMsgSuccessComponent },
            { path: 'popup', component: DemoPopupComponent }
        ]
    }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PageComponent,
        AccordionComponent,

        LayoutComponent, HomeComponent, ButtonComponent, InputComponent, ListComponent, SliderComponent,
        DemoUploaderComponent, DemoActionSheetComponent, DemoDialogComponent, ArticleComponent, FlexComponent,
        BadgeComponent, FooterComponent, GridComponent, IconsComponent, PanelComponent, PreviewComponent,
        DemoLoadmoreComponent, DemoProgressComponent, DemoGalleryComponent, DemoPickerComponent,
        DemoSearchBarComponent, DemoNavbarComponent, DemoTabbarComponent, DemoToastComponent,
        DemoToptipsComponent, DemoMsgComponent, DemoMsgFailComponent, DemoMsgSuccessComponent,
        DemoPopupComponent
    ],
    entryComponents: [
        PageComponent,
        AccordionComponent
    ],
    providers: [ MenuService ],
    exports: [
    ]
})
export class ExampleModule {}