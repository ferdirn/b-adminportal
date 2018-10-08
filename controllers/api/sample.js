module.exports = (router) => {
  /**
   * @swagger
   * /api/sample:
   *   get:
   *     description: Sample API Doc
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  router.get('/', (req, res) => {
    const data = {
      success: true,
    };

    res.json(data);
  });

  /**
   * @swagger
   * /api/sample/merchants:
   *   get:
   *     description: Get All Merchants API
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  router.get('/merchants', (req, res) => {
    const data = {
      success: true,
      message: 'Get all merchants'
    };

    res.json(data);
  });
};
