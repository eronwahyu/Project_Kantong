import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihBC1.1Page } from './pilih-bc1.1.page';

describe('PilihBC1.1Page', () => {
  let component: PilihBC1.1Page;
  let fixture: ComponentFixture<PilihBC1.1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihBC1.1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihBC1.1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
