#import "AppDelegate.h"
#import "RNSplashScreen.h"
#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{  
  // NÃO MEXER AQUI SEM PENSAR DUAS VEZES
  // SE FOR ALGUEM QUE NÃO SEJA O PAULO, NÃO MEXA AQUI

  self.moduleName = @"BetstatsMobile";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  bool didFinish=[super application:application didFinishLaunchingWithOptions:launchOptions];

  return didFinish;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
