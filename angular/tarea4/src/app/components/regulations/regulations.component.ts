import { Component } from '@angular/core';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.css']
})
export class RegulationsComponent {
  documents = [
    { name: 'Documento 1', thumbnail: 'assets/doc1.png', url: 'assets/doc1.pdf' },
    { name: 'Documento 2', thumbnail: 'assets/doc2.png', url: 'assets/doc2.pdf' },
    // Más documentos según sea necesario
  ];

  downloadPDF(url: string) {
    window.open(url, '_blank');
  }
}
