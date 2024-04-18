/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        UserID:
 *          type: integer
 *          format: int64
 *          description: The unique identifier for a user
 *        Username:
 *          type: string
 *          description: The username of the user
 *        Email:
 *          type: string
 *          format: email
 *          description: The email address of the user
 *        Password:
 *          type: string
 *          description: The password of the user
 *      required:
 *        - Username
 *        - Email
 *        - Password
 *
 *    Event:
 *      type: object
 *      properties:
 *        EventID:
 *          type: integer
 *          format: int64
 *          description: The unique identifier for an event
 *        UserID:
 *          type: integer
 *          format: int64
 *          description: The user ID associated with the event
 *        Title:
 *          type: string
 *          description: The title of the event
 *        Description:
 *          type: string
 *          description: The description of the event
 *        StartDateTime:
 *          type: string
 *          format: date-time
 *          description: The start date and time of the event (in ISO 8601 format)
 *        EndDateTime:
 *          type: string
 *          format: date-time
 *          description: The end date and time of the event (in ISO 8601 format)
 *        Location:
 *          type: string
 *          description: The location of the event
 *      required:
 *        - UserID
 *        - Title
 *        - StartDateTime
 *        - EndDateTime
 *
 *    Schedule:
 *      type: object
 *      properties:
 *        ScheduleID:
 *          type: integer
 *          format: int64
 *          description: The unique identifier for a schedule
 *        UserID:
 *          type: integer
 *          format: int64
 *          description: The user ID associated with the schedule
 *        Title:
 *          type: string
 *          description: The title of the schedule
 *        Description:
 *          type: string
 *          description: The description of the schedule
 *        ColorCode:
 *          type: string
 *          description: The color code of the schedule (in #RRGGBB format)
 *      required:
 *        - UserID
 *        - Title
 *
 *    EventScheduleMapping:
 *      type: object
 *      properties:
 *        EventScheduleID:
 *          type: integer
 *          format: int64
 *          description: The unique identifier for an event-schedul
*/