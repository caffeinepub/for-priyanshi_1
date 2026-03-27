import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  type Response = {
    message : Text;
    timestamp : Time.Time;
  };

  var storedResponse : ?Response = null;

  public shared ({ caller }) func submitResponse(message : Text) : async () {
    if (storedResponse != null) {
      Runtime.trap("Response already submitted.");
    };
    storedResponse := ?{
      message;
      timestamp = Time.now();
    };
  };

  public query ({ caller }) func getResponse() : async ?Response {
    storedResponse;
  };
};
