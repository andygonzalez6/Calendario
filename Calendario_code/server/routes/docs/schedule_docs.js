/**
 * @swagger
 * tags:
 *   name: Schedules
 *   description: API for managing schedules
 * /schedule:
 *   post:
 *     summary: Create a new schedule
 *     tags: [Schedules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: integer
 *                 description: The user ID associated with the schedule
 *               title:
 *                 type: string
 *                 description: The title of the schedule
 *               description:
 *                 type: string
 *                 description: The description of the schedule
 *               colorCode:
 *                 type: string
 *                 description: The color code of the schedule (in #RRGGBB format)
 *             required:
 *               - userid
 *               - title
 *     responses:
 *       200:
 *         description: Schedule created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Schedule'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * tags:
 *   name: Schedules
 *   description: API for managing schedules
 * /schedule:
 *   delete:
 *     summary: Delete a schedule
 *     tags: [Schedules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               scheduleid:
 *                 type: integer
 *                 description: The ID of the schedule to be deleted
 *             required:
 *               - scheduleid
 *     responses:
 *       200:
 *         description: Schedule deleted successfully.
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * tags:
 *   name: Schedules
 *   description: API for managing schedules
 * /schedule:
 *   put:
 *     summary: Edit an existing schedule
 *     tags: [Schedules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               scheduleid:
 *                 type: integer
 *                 description: The ID of the schedule to be edited
 *               title:
 *                 type: string
 *                 description: The new title of the schedule
 *               description:
 *                 type: string
 *                 description: The new description of the schedule
 *               colorCode:
 *                 type: string
 *                 description: The new color code of the schedule (in #RRGGBB format)
 *             required:
 *               - scheduleid
 *     responses:
 *       200:
 *         description: Schedule edited successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Schedule'
 *       500:
 *         description: Internal Server Error
 */
