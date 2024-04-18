/**
 * @swagger
 * tags:
 *   name: EventSchedule
 *   description: API for managing event schedules
 * /eventschedule:
 *   post:
 *     summary: Add an event to a schedule
 *     tags: [EventSchedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventid:
 *                 type: integer
 *                 description: The ID of the event to be added to the schedule
 *               scheduleid:
 *                 type: integer
 *                 description: The ID of the schedule to which the event will be added
 *             required:
 *               - eventid
 *               - scheduleid
 *     responses:
 *       200:
 *         description: Event added to schedule successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EventSchedule'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * tags:
 *   name: EventSchedule
 *   description: API for managing event schedules
 * /eventschedule:
 *   delete:
 *     summary: Remove an event from a schedule
 *     tags: [EventSchedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventid:
 *                 type: integer
 *                 description: The ID of the event to be removed from the schedule
 *               scheduleid:
 *                 type: integer
 *                 description: The ID of the schedule from which the event will be removed
 *             required:
 *               - eventid
 *               - scheduleid
 *     responses:
 *       200:
 *         description: Event removed from schedule successfully.
 *       500:
 *         description: Internal Server Error
 */
