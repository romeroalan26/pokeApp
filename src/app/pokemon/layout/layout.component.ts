import { Component } from '@angular/core';

type Tabs = 'tab-pokemons' | 'tab-favorites';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  public currentTab: Tabs = 'tab-pokemons';
  public pokemons: any[] = new Array(151);
}
