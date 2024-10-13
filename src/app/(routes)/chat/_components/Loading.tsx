import React from "react";
import {Spinner} from "@nextui-org/spinner";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center mt-2">
          <Spinner size="lg" />
          </div>
      )}
    </div>
  );
};

export default Loading;
