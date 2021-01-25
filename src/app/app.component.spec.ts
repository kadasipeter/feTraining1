import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppStateModule } from './state/app-state.module';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  const routerMock = {
    navigate: jasmine.createSpy('navigate')
};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        SharedModule,
        AppStateModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
  //      { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'work-items-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('work-items-app');
  });
});
