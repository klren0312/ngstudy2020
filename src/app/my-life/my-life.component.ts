import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service'

@Component({
  selector: 'app-my-life',
  templateUrl: './my-life.component.html',
  styleUrls: ['./my-life.component.scss'],
  providers: [LoggerService]
})
export class MyLifeComponent implements OnInit {
  newName = 'ren'
  heroes: string[] = ['win', 'linux']
  constructor(public logger: LoggerService) { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName)
      this.newName = ''
      this.logger.tick()
    }
  }

  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1)
    this.logger.tick()
  }

  reset() {
    this.logger.log('-- reset --')
    this.heroes = []
    this.logger.tick()
  }
}
