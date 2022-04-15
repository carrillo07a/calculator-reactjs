export const BUTTON_ACTIONS = {
	ADD: 'ADD',
	THEME: 'THEME',
	CALC: 'CALC',
	DELETE: 'DELETE',
};

export const BUTTONS = [
	{
		display: 'C',
		action: BUTTON_ACTIONS.DELETE,
		class: 'button__operation',
	},
	{
		display: '(',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operation',
	},
	{
		display: ')',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operation',
	},
	{
		display: '/',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operation',
	},
	{
		display: '7',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '8',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '9',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: 'x',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operation',
	},
	{
		display: '4',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '5',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '6',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '-',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operation',
	},
	{
		display: '1',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '2',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '3',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '+',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operation',
	},
	{
		display: '🕵',
		action: BUTTON_ACTIONS.THEME,
		class: '',
	},
	{
		display: '0',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '.',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '=',
		action: BUTTON_ACTIONS.CALC,
		class: 'button__operation',
	},
];
