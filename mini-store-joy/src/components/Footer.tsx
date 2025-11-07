import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            Created with <Heart className="inline h-4 w-4 text-destructive fill-destructive" /> by{' '}
            <span className="font-semibold text-foreground">Moksh Tyagi</span>
          </p>
          <p className="text-xs text-muted-foreground">
            BTech CSE Student at LPU
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} SnoopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
