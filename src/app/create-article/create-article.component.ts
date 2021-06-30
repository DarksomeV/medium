import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  public initialValues = {
    title: 'Foo',
    description: 'des',
    body: 'Test',
    tagList: ['njjnj', 'xnjs'],
  }

  constructor() { }

  public ngOnInit(): void {
  }

  public onSubmit(res: any) {
    console.log(res);
  }

}
