import React from "react";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

import { CartButton, Container, PizzaLogo, SearchInput } from "./";
import { User } from "lucide-react";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Linke Seite */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <PizzaLogo />
            <div>
              <h1 className="text-2xl uppercase font-black text-primary">
                Pizza Zeit
              </h1>
              <p className="text-sm text-gray-400 leading-3">
                die leckerste Pizza
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/* Rechte Seite */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Einloggen
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
