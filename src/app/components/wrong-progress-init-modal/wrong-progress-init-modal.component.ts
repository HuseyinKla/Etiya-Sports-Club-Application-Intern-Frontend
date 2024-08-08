import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wrong-progress-init-modal',
  templateUrl: './wrong-progress-init-modal.component.html',
  styleUrls: ['./wrong-progress-init-modal.component.css']
})
export class WrongProgressInitModalComponent{

  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
