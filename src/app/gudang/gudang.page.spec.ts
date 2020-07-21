import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GudangPage } from './gudang.page';

describe('GudangPage', () => {
  let component: GudangPage;
  let fixture: ComponentFixture<GudangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GudangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GudangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
