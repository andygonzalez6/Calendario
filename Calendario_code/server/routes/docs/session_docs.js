/**
 * @swagger
 * tags:
 *   name: Sessions
 *   description: API for managing user sessions
 * /session/login:
 *   post:
 *     summary: User login
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User successfully logged in.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 authenticated:
 *                   type: boolean
 *                 user:
 *                   type: object
 *                   properties:
 *                     userid:
 *                       type: integer
 *                     username:
 *                       type: string
 *       403:
 *         description: Invalid credentials or missing username/password.
 *       500:
 *         description: Internal Server Error
 * /session/logout:
 *   post:
 *     summary: User logout
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: User successfully logged out.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Message:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 */
