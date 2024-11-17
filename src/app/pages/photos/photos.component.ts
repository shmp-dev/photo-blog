import { Component } from '@angular/core';
import { PhotoCardComponent } from "../../components/photo-card/photo-card.component";

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [PhotoCardComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {

}
