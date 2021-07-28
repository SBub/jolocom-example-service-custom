import { AppConfig } from '../config/config'
import { controller, httpPost } from 'inversify-express-utils'
import { Request } from 'express'
import { SdkAgentFactory } from '../sdk/sdkAgentFactory'
import { RequestDescriptionFactory } from '../interaction/requestDescriptionFactory'
import { inject } from 'inversify'
import { TYPES } from '../types'

@controller('/authorization')
export class AuthorizationController {
  constructor(
    private readonly agentFactory: SdkAgentFactory,
    private readonly requestDescriptionFactory: RequestDescriptionFactory,
    @inject(TYPES.AppConfig) private readonly appConfig: AppConfig
  ) {}

  /**
   * @openapi
   * /api/v1/authorization:
   *   post:
   *     summary: Receive authorization request description
   *     tags:
   *       - Authorization
   *     requestBody:
   *       description: Body of the request
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               description:
   *                 type: string
   *               action:
   *                 type: string
   *               imageURL:
   *                 type: string
   *     responses:
   *       200:
   *         description: Returns authorization request description.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: string
   *                   description: The token ID.
   *                 jwt:
   *                   type: string
   *                   description: The token.
   *                 qr:
   *                   type: string
   *                   description: The QR code of the JWT.
   */
  @httpPost('/')
  public async post(request: Request) {
    // TODO: Add request body validation
    // TODO: Refactor in favor of strategy pattern usage
    const agent = await this.agentFactory.create()
    const token = await agent.authorizationRequestToken({
      description: request.body?.description,
      action: request.body?.action,
      imageURL: request.body?.imageURL,
      callbackURL: this.appConfig.sdk.callbackUrl,
    })
    const requestDescription = await this.requestDescriptionFactory.create(token)

    return requestDescription.toJSON()
  }
}