import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  steps = Array(4).fill(0).map((_, index) => index); // Array of step indices
  currentStep = 0;
  stepInfo = [
    'This is step 1',
    'This is step 2',
    'This is step 3',
    'This is step 4'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  saveAndContinue(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  goToPrevious(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  skipStep(): void {
    if (this.currentStep === this.steps.length - 2) {
      this.currentStep++;
    }
  }

  goToStep(stepIndex: number): void {
    this.currentStep = stepIndex;
  }

  getStepIconClass(stepIndex: number): string {
    const iconClasses = [
      'fa-folder-open',
      'fa-pencil',
      'fa-picture',
      'fa-check'
    ];
  
    return `fa ${iconClasses[stepIndex]}`;
  }
}
