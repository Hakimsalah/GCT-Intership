import { Evaluation } from "./Evaluation.model";
import { Stage } from "./stage.model";

export interface EvaluationResponse {
    evaluations: Evaluation[];
    stage: Stage;
  }