import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headeragent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headeragent.component.html',
  styleUrl: './headeragent.component.css'
})
export class HeaderagentComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
}
