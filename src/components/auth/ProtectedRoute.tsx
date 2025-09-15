import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './AuthModal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Shield, Users } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredAction?: 'give' | 'visit' | 'involve' | 'general';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredAction = 'general' }) => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const getActionInfo = () => {
    switch (requiredAction) {
      case 'give':
        return {
          title: 'Give Online',
          description: 'Sign in to make donations and support our ministry',
          icon: <Shield className="h-8 w-8" />,
        };
      case 'visit':
        return {
          title: 'Plan Your Visit',
          description: 'Sign in to plan your visit and let us know you\'re coming',
          icon: <Users className="h-8 w-8" />,
        };
      case 'involve':
        return {
          title: 'Get Involved',
          description: 'Sign in to join our community and get involved in ministry',
          icon: <Users className="h-8 w-8" />,
        };
      default:
        return {
          title: 'Sign In Required',
          description: 'Please sign in to access this feature',
          icon: <Lock className="h-8 w-8" />,
        };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    const actionInfo = getActionInfo();
    
    return (
      <>
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <Card className="w-full max-w-md text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  {actionInfo.icon}
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">{actionInfo.title}</CardTitle>
              <CardDescription>{actionInfo.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Join our Kingdom Life Global community to access all features and stay connected with our ministry.
              </p>
              <Button 
                onClick={() => setShowAuthModal(true)}
                className="w-full btn-gold"
                size="lg"
              >
                Sign In / Sign Up
              </Button>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our terms of service and privacy policy.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)}
          defaultTab="signin"
        />
      </>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
