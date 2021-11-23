import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'desafio-dos';
  cities = [
    {
      id: 1,
      name: 'Buenos Aires',
      image:
        'https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg',
      page: 'https://turismo.buenosaires.gob.ar/',
      description:
        'Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones.',
    },
    {
      id: 2,
      name: 'Bariloche',
      image:
        'https://images.pexels.com/photos/4596205/pexels-photo-4596205.jpeg',
      page: 'https://barilocheturismo.gob.ar/',
      description:
        'San Carlos de Bariloche (comúnmente llamada Bariloche) es una ciudad en la región de la Patagonia argentina. Limita con Nahuel Huapi, un gran lago glacial rodeado de montañas de los Andes.',
    },
    {
      id: 3,
      name: 'Córdoba',
      image: 'https://images.pexels.com/photos/573122/pexels-photo-573122.jpeg',
      page: 'https://www.cordobaturismo.gov.ar/',
      description:
        'Córdoba, la capital de la provincia argentina del mismo nombre, es conocida por su arquitectura colonial española. Alberga la Manzana Jesuítica, un complejo del siglo XVII con claustros activos, iglesias y el campus original de la Universidad Nacional de Córdoba, una de las universidades más antiguas de Sudamérica.',
    },
  ];
}
