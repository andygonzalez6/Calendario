/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API for managing events
 * /event:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: integer
 *                 description: The user ID associated with the event
 *               title:
 *                 type: string
 *                 description: The title of the event
 *               description:
 *                 type: string
 *                 description: The description of the event
 *               startdatetime:
 *                 type: string
 *                 format: date-time
 *                 description: The start date and time of the event (in ISO 8601 format)
 *               enddatetime:
 *                 type: string
 *                 format: date-time
 *                 description: The end date and time of the event (in ISO 8601 format)
 *               location:
 *                 type: string
 *                 description: The location of the event
 *             required:
 *               - userid
 *               - title
 *               - startdatetime
 *               - enddatetime
 *     responses:
 *       200:
 *         description: The created event.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API for managing events
 * /event:
 *   delete:
 *     summary: Delete an event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventid:
 *                 type: integer
 *                 description: The ID of the event to be deleted
 *             required:
 *               - eventid
 *     responses:
 *       200:
 *         description: Event successfully deleted.
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API for managing events
 * /event:
 *   put:
 *     summary: Edit an existing event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventid:
 *                 type: integer
 *                 description: The ID of the event to be edited
 *               title:
 *                 type: string
 *                 description: The new title of the event
 *               description:
 *                 type: string
 *                 description: The new description of the event
 *               startdatetime:
 *                 type: string
 *                 format: date-time
 *                 description: The new start date and time of the event (in ISO 8601 format)
 *               enddatetime:
 *                 type: string
 *                 format: date-time
 *                 description: The new end date and time of the event (in ISO 8601 format)
 *               location:
 *                 type: string
 *                 description: The new location of the event
 *             required:
 *               - eventid
 *     responses:
 *       200:
 *         description: Event successfully modified.
 *       500:
 *         description: Internal Server Error
 */
