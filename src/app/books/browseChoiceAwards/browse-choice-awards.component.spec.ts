import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowseChoiceAwardsComponent } from './browse-choice-awards.component';


describe('BrowseChoiceAwardsComponent', () => {
  let component: BrowseChoiceAwardsComponent;
  let fixture: ComponentFixture<BrowseChoiceAwardsComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedBrowseChoiceAwardTitle: string = "Want to Read";
  let expectedAuthor: string = "Want to Read";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [BrowseChoiceAwardsComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseChoiceAwardsComponent);
    component = fixture.componentInstance;
    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.title ="Want to Read";
    component.author = "Want to Read";
    fixture.detectChanges();
  });

  it('should create app', () => {
    expect(component).toBeDefined();
  });

  it('should display browse choice award title', () => {
    expect(cardEl.textContent).toContain(expectedBrowseChoiceAwardTitle);
  });

  it('should display browse choice award author', () => {
    expect(cardEl.textContent).toContain(expectedAuthor);
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(BrowseChoiceAwardsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-unit-test!');
 }));

 it('should convert hero name to Title Case', () => {
  // get the name's input and display elements from the DOM
  const hostElement: HTMLElement = fixture.nativeElement;
  const nameInput: HTMLInputElement = hostElement.querySelector('input')!;
  const nameDisplay: HTMLElement = hostElement.querySelector('span')!;
