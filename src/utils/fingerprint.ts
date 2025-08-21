// Générer une empreinte unique du navigateur pour prévenir les votes multiples
export const generateFingerprint = (): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Loyola Vote Fingerprint 🗳️', 2, 2);
  }
  
  const canvasFingerprint = canvas.toDataURL();
  
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: navigator.languages?.join(',') || '',
    platform: navigator.platform,
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${screen.width}x${screen.height}x${screen.colorDepth}`,
    canvas: canvasFingerprint.slice(-50), // Derniers 50 caractères du canvas
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
    deviceMemory: (navigator as any).deviceMemory || 0,
    pixelRatio: window.devicePixelRatio || 1
  };
  
  // Créer un hash simple de l'empreinte
  const fingerprintString = JSON.stringify(fingerprint);
  let hash = 0;
  
  for (let i = 0; i < fingerprintString.length; i++) {
    const char = fingerprintString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convertir en 32bit
  }
  
  return Math.abs(hash).toString(36);
};

// Obtenir l'IP (approximative via service externe si nécessaire)
export const getClientIP = async (): Promise<string | null> => {
  try {
    // On peut utiliser un service gratuit pour obtenir l'IP
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('Impossible d\'obtenir l\'IP:', error);
    return null;
  }
};