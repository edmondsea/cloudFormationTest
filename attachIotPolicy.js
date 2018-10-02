import * as iot from 'aws-iot';
import { success, failure } from 'response';

export const POLICY_NAME = 'IotWebPolicy';

/**
 * Attach a policy to the Cognito Identity to allow it to connect to IoT
 */

import json
import cfnresponse

export const main = async (event, context, callback) => {
  const principal = event.requestContext.identity.cognitoIdentityId;

  try {
    const iot = new AWS.Iot();
    const params = { 'IotWebPolicy', principal };
    iot.attachPrincipalPolicy(params).promise();
      
    responseValue = 0
    responseData = {}
    responseData['Data'] = responseValue
    cfnresponse.send(event, context, cfnresponse.SUCCESS, responseData, "Success response ")

  } catch (e) {
    if (e.statusCode === 409) {
      // Policy already exists for this cognito identity
      //TODO send success
    } else {
      //TODO send error
    }
  }
};
