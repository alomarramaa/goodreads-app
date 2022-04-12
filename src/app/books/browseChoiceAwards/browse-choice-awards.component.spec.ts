import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display browse choice award title', () => {
    expect(cardEl.textContent).toContain(expectedAuthor);
  });
});
