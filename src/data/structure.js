// /:subject?/:topic?/:segment?

/*
	Let's start with 3 layers:
	Subject: Math, Physics, Chemistry, Biology, History, Philosophy
	Topic: Math => Early math, Arithmetic,...
	Segment: Math > Early math > Addition

	Math
		Early Math
			Addition
			Substraction
			Multiplication
			Division
		Arithmetic
		Pre-algebra
		Algebra 1
		Geometry
		Algebra 2
		Trigonometry
		Precalculus
		Statistics & probability
		AP Calculus AB
		AP Calculus BC
		Multivariable calculus
		Differential equations
		Linear algebra
*/


let structure = [
	{
		id: `math`,
		name: `Mathematics`,
		type: `subject`
	},
	{
		id: `math-early-math`,
		name: `Early Math`,
		type: `topic`,
		parentSubjectId: `math`
	},
	{
		id: `math-arithmetic`,
		name: `Arithmetic`,
		type: `topic`,
		parentSubjectId: `math`
	},
	{
		id: `math-pre-algebra`,
		name: `Pre-algebra`,
		type: `topic`,
		parentSubjectId: `math`
	},
	{
		id: `math-early-math-addition`,
		name: `Addition`,
		type: `segment`,
		parentSubjectId: `math`,
		parentTopicId: `math-early-math`
	},
	{
		id: `math-early-math-subtraction`,
		name: `Subtraction`,
		type: `segment`,
		parentSubjectId: `math`,
		parentTopicId: `math-early-math`
	},
	{
		id: `physics`,
		name: `Physics`,
		type: `subject`
	},
	{
		id: `chemistry`,
		name: `Chemistry`,
		type: `subject`
	},
	{
		id: `biology`,
		name: `Biology`,
		type: `subject`
	},
	{
		id: `history`,
		name: `History`,
		type: `subject`
	},
	{
		id: `phylosophy`,
		name: `Phylosophy`,
		type: `subject`
	}
]



export default structure