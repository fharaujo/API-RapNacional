const routes = require("express").Router();

const DiscController = require("../controllers/DiscController");
const DiscMiddleware = require("../middlewares/DiscMiddlewares");

// config swagger project
/**
 * @swagger
 * components:
 *    schemas:
 *      Disc:
 *        type: object
 *        required:
 *          - name
 *          - artist
 *          - imgURL
 *          - companyRecord
 *          - description
 *          - releaseYear
 *        properties:
 *           id:
 *             type: string
 *             description: The auto-generated id of the disc
 *           name:
 *              type: string
 *              description: The disc title
 *           artist:
 *              type: string
 *              description: The disc artist
 *           imgURL:
 *              type: string
 *              description: URL web image disc http://www.stack.com/image.jpg
 *           companyRecord:
 *              type: string
 *              description: The name company record
 *           description:
 *              type: string
 *              description: The brave text of the disc
 *           releaseYear:
 *              type: integer
 *              description: The year release disc
 *        example:
 *          id: 43hfd83ekd93kd93l34
 *          name: Nome do cd
 *          artist: Nome do artista
 *          imgURL: url da capa
 *          companyRecord: Nome da gravadora
 *          description: Texto sobre o cd
 *          releaseYear: 2021
 */

// route get all discs
/**
 * @swagger
 * /discs:
 *   get:
 *     summary: get all discs
 *     tags:
 *       - Discs All
 *     description: Returns all discs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of disc
 *         schema:
 *           $ref: '#/components/schemas/Disc'
 */
routes.get("/discs", DiscController.getAll);

// route get by id disc
/**
 * @swagger
 * /discs/{id}:
 *   get:
 *     summary: Get single disc by the id
 *     tags:
 *       - Disc By Id
 *     description: Returns a single Disc
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Disc's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Disc
 *         schema:
 *           $ref: '#/components/schemas/Disc'
 */
routes.get("/discs/:id", DiscMiddleware.isValidId, DiscController.getById);

// post create disc
/**
 * @swagger
 * /discs:
 *   post:
 *     summary: Create a new single disc
 *     tags: [Disc Create]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Disc'
 *     responses:
 *       200:
 *         description: The Disc was successfully created
 *         content:
 *            application/json:
 *                schema:
 *                   $ref: '#/components/schemas/Disc'
 */
routes.post("/discs", DiscController.create);

// route update by id disc
/**
 * @swagger
 * /discs/{id}:
 *   put:
 *     summary: Update a single disc by the id
 *     tags: [Disc Update]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The disc id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Disc'
 *     responses:
 *       200:
 *         description: The Disc was successfully created
 *         content:
 *            application/json:
 *                schema:
 *                   $ref: '#/components/schemas/Disc'
 */
routes.put("/discs/:id", DiscMiddleware.isValidId, DiscController.update);

// router delete by id disc
/**
 * @swagger
 * /discs/{id}:
 *   delete:
 *     summary: Delete a single disc by the id
 *     tags:
 *       - Disc Delete
 *     description: Deletes a single disc
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Disc's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
routes.delete("/discs/:id", DiscMiddleware.isValidId, DiscController.remove);

// route filter by name
/**
 * @swagger
 * paths:
 *    /filterByNameDisc:
 *        tags: Filter By Name
 *        get:
 *          parameters:
 *            - in: query
 *              name: name
 *              type: array
 *              items:
 *                type: string
 *          responses:
 *              "200":
 *                  description: sucessful operation
 *                  schema:
 *                    $ref: '#/components/schemas/Disc'
 *                    type: array
 *                    items:
 *                      type: object
 *                      required:
 *                         name:
 *                           type: string
 *
 *
 */
routes.get("/filterByNameDisc", DiscController.filterByNameDisc);

// route filter by artist name
routes.get("/filterByArtistName", DiscController.filterByArtistName);

// route filter all
routes.get("/filterAll", DiscController.filterAll);

module.exports = routes;
