export class EditorConstant {

  controlGroups = [ControlGroups.BASIC, ControlGroups.BASIC,]

  controlDetails: ControlDetails[] = [
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.TEXT, iconName: 'textbox' },
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.NUMERIC, iconName: 'numeric' },
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.RADIO, iconName: 'radio' },
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.CHECKBOX, iconName: 'checkbox' },
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.SINGLEDROPDOWN, iconName: 'dropdown' },
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.DATEPICKER, iconName: 'datepicker' },
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.TEXTAREA, iconName: 'textarea' },
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.SLIDER, iconName: 'slider' },
    { controlGroup: ControlGroups.BASIC, controlType: ControlTypes.SLIDERTOGGLE, iconName: 'toggle' },
  ]


}

export interface ControlDetails {
  controlGroup: ControlGroups;
  controlType: ControlTypes;
  iconName?: string
}


export enum ControlGroups {
  BASIC = 'Basic Controls',
  TEMPLATE = 'Template Controls',
  PAYMENT = 'Payment'
}

export enum ControlTypes {
  TEXT = "Text Box",
  NUMERIC = "Numeric",
  RADIO = "Radio Group",
  CHECKBOX = "Checkbox",
  SINGLEDROPDOWN = "Dropdown",
  DATEPICKER = 'Date Picker',
  TEXTAREA = 'Text Area',
  SLIDER = 'Slider',
  SLIDERTOGGLE = 'Slider Toggle',
}


