import { Component } from '@angular/core';

import { FooterComponent as CoreFooterComponent } from 'core/modules/shared/footer/footer.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends CoreFooterComponent { }
