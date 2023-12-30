import { MovementFactory } from './movement-factory.js';

export class Animation
{
	constructor(element, settings)
	{
		this.element = element;

		/* this will track the animation properties being
		animated */
		this.movements = [];
		this.setupMovements(settings);
	}

	setup(settings)
	{
		this.setupMovements(settings);
	}

	addMovement(property)
	{
		this.movements.push(property);
	}

	setupMovements(settings)
	{
		let movement,
		element = this.element;

		const addMovement = (movementSettings) =>
		{
			movement = MovementFactory.create(element, movementSettings);
			this.addMovement(movement);
		};

		/* this will check if we have multiple properties to
		add or only one property */
		let property = settings.property;
		if(Array.isArray(property))
		{
			for(var i = 0, length = property.length; i < length; i++)
			{
				addMovement(property[i]);
			}
		}
		else
		{
			addMovement(settings);
		}
	}

	step(delta)
	{
		let movements = this.movements,
		length = movements.length;
		for(var i = 0; i < length; i++)
		{
			movements[i].step(delta);
		}
	}
}