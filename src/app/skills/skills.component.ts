import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  skillsForm: FormGroup;
  constructor(private formsBuilder: FormBuilder) {}

  ngOnInit() {
    this.skillsForm = this.formsBuilder.group({
      userSkills: new FormArray([])
    });
    this.addSkill();
  }
  get skills() {
    return (this.skillsForm.get("userSkills") as FormArray).controls;
  }
  addSkill() {
    (this.skillsForm.get("userSkills") as FormArray).push(
      new FormGroup({
        skill: new FormControl(""),
        lastUsed: new FormControl("")
      })
    );
  }
  removeSkill(index: number) {
    (this.skillsForm.get("userSkills") as FormArray).removeAt(index);
  }
  save() {
    this.skills.forEach(skill => {
      console.log(skill);
    });
  }
}
