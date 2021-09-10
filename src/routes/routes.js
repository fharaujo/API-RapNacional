const routes = require("express").Router();

const DiscController = require("../controllers/DiscController");
const DiscMiddleware = require("../middlewares/DiscMiddlewares");

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
 *           yearRelease:
 *              type: integer
 *              description: The year release disc
 *        example:
 *           id: gi34gfdpp44454r
 *           name: Sobrevivendo no Inferno
 *           artist: Racionais MC's
 *           imgURL: http://imagens.com/capa.jpg
 *           companyRecord: CosaNostra
 *           description: sales record album
 *           yearRelease: 1997
 *           
 *              
 */
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
/**
 * @swagger
 * /discs:
 *   post:
 *     summary: Create a new single disc 
 *     tags:
 *       - Disc Create
 *     description: Create a new disc
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: disc
 *         description: Disc object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Disc'
 *     responses:
 *       200:
 *         description: Successfully created
 */
routes.post("/discs", DiscController.create);
/**
 * @swagger
 * /discs/{id}:
 *   put:
 *     summary: Update a single disc by the id
 *     tags: [Discs Update]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *         type: string
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
 *         description: Successfully updated
 */
routes.put("/discs/:id", DiscMiddleware.isValidId, DiscController.update);
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

module.exports = routes;
