import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { AboutMe } from '../../shared/components/about-me/about-me';
import { SkillSet } from '../../shared/components/skill-set/skill-set';
import { Projects } from '../../shared/components/projects/projects';
import { Review } from '../../shared/components/review/review';
import { Contact } from '../../shared/components/contact/contact';

@Component({
  selector: 'app-main-page',
  imports: [Hero, AboutMe, SkillSet, Projects, Review, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
