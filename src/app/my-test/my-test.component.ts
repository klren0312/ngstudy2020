import { Component, OnInit, Input, SimpleChanges } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {
  @Input() theInput: string
  isSpecial: boolean = false
  checkForm: Object
  inputValue: string = ''
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.checkForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onKey(event: any) {
    this.inputValue += event.target.value + ' | '
  }

  ngOnInit(): void {
    console.log('on init')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes)
  }

  ngDoCheck(): void {
    console.log('do check')
  }

  ngAfterContentCheck(): void {
    console.log('after content check')
  }

  ngAfterViewInit(): void {
    console.log('after view init')
  }

  ngAfterViewChecked(): void {
    console.log('after view checked')
  }

  ngOnDestroy(): void {
    console.log('on destroy')
  }
}
