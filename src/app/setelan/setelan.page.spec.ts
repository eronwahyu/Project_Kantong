import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetelanPage } from './setelan.page';

describe('SetelanPage', () => {
  let component: SetelanPage;
  let fixture: ComponentFixture<SetelanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetelanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetelanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
