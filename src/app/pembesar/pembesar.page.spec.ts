import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PembesarPage } from './pembesar.page';

describe('PembesarPage', () => {
  let component: PembesarPage;
  let fixture: ComponentFixture<PembesarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembesarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PembesarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
