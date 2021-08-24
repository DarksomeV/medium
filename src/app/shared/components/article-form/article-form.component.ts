import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IArticleInput } from '../../types/article-input.interface';
import { IBackendErrors } from '../../types/backend-errors.interface';

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Input() public initialValues: IArticleInput;
  @Input() public isSubmitting: boolean;
  @Input() public errors: IBackendErrors;

  @Output() public articleSubmitEvent: EventEmitter<IArticleInput> = new EventEmitter<IArticleInput>();

  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }

  private initForm(): void {
    this.form = this._fb.group({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' '),
    });
  }

}
