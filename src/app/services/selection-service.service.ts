import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selectedCandidates: any[] = [];

  constructor() { }

  addSelectedCandidate(candidate: any) {
    if (!this.selectedCandidates.includes(candidate)) {
      this.selectedCandidates.push(candidate);
    }
  }

  removeSelectedCandidate(candidate: any) {
    const index = this.selectedCandidates.indexOf(candidate);
    if (index !== -1) {
      this.selectedCandidates.splice(index, 1);
    }
  }

  getSelectedCandidates() {
    return this.selectedCandidates;
  }



}