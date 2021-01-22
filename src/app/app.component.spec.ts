import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppStateModule } from './state/app-state.module';

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
